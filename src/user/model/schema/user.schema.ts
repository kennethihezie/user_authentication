import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>

@Schema({ timestamps: true })
export class User {
    @Prop({ auto: 'number', index: 'ascending' })
    userId: number

    @Prop({ index: 'ascending', unique: true })
    email: string

    @Prop({ default: null })
    firstName: string

    @Prop({ default: null })
    lastName: string

    @Prop({ default: null })
    phone: string

    @Prop()
    password: string
}

export const UserSchema = SchemaFactory.createForClass(User)