import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Otp } from './model/schema/otp.schema';
import { Model } from 'mongoose';
import { OtpDto } from './model/dto/otp.dto';

@Injectable()
export class OtpService {
    constructor(@InjectModel(Otp.name) private readonly otpModel: Model<Otp>) {}

    // async sendOtp(otpDto: OtpDto): Promise<string>{

    // }
}
