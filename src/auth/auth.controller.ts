import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Patch,
  UseGuards,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { RefreshTokenGuard } from 'src/common/guards/refreshToken.guard';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { User } from '@prisma/client';
import { MailerService } from 'src/mailer/mailer.service';
import { IJwtPayload } from './dto/jwt-payload.interface';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

@Controller('api/v1/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly sendGridService: MailerService,
  ) {}

  /* 
    Controlador de endpoints para usuarios
  */
  @Post('signup')
  signup(@Body() createUserDto: User) {
    return this.authService.signUp(createUserDto);
  }

  /* 
    Controlador de endpoints para usuarios
  */
    @UseGuards(AccessTokenGuard)
    @Patch('signup/account')
    async verificarCuenta(@Req() req: Request, @Res() resp: Response) {
      const user = req.user as IJwtPayload;
      const resultado: any = await this.authService.verificarCuenta(user.id);
      const status = !resultado.error ? HttpStatus.OK : HttpStatus.FORBIDDEN;
      resp.status(status).json(resultado);
    }

  /* 
    Inicio de sesión para todos los usuarios
  */
  @Post('signin')
  signin(@Body() data: AuthDto) {
    return this.authService.signIn(data);
  }

  /* 
    All users recovery password. 
    There's a leak with this endpoint,
    it's pretty insecure
  */

  @UseGuards(RefreshTokenGuard)
  @Patch('passwordChange')
  recovery(@Body() data: User) {
    return this.authService.recovery(data);
  }

  @Post('recovery')
  async register(@Body() body: any, @Res() res: Response) {
    const data = await this.authService.obtenerRefreshToken(body.email);
    
    if (!!data.error)
     res.status(HttpStatus.NOT_FOUND).json(data);
    
    const confirmationLink = `http://75.102.23.226:3000/newPassword?token=${data.refreshToken}`;
    // Send confirmation email
    await this.sendGridService.sendConfirmationEmail(
      body.email,
      'Recuperación de contraseña',
      'Ahora puedes cambiar tu contraseña Kuidisalud, ingresa a este link para restablecer tu contraseña ' + confirmationLink
    );

    // Return success response
    res.status(HttpStatus.OK).json( {
      message:
        'Por favor revisa tu email para continuar con la recuperación de tú cuenta',
    });
  }

  /* 
    Refresh JWT tokens
  */
  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  refreshTokens(@Req() req: Request) {
    const userId = req.user['sub'];
    const refreshToken = req.user['refreshToken'];
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
