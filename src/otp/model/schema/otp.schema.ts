import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type OtpDocument = HydratedDocument<Otp>

@Schema()
export class Otp {
    @Prop()
    email: string

    @Prop()
    otp: string
}

export const OtpSchema = SchemaFactory.createForClass(Otp)