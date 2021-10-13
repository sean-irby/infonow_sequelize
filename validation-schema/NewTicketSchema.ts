import Joi from "joi";
import { ValidationError } from "../utils/errors";
import { JoiType } from "../types/JoiType";

export type NewTicketSchemaType = {
    name: string,
    email: string,
    subject: string,
    message: string
};


export const NewTicketSchema = JoiType({
	subject: Joi.string().error(
		new ValidationError("%s is required", "subject")
	),

	message: Joi.string()
		.min(10)
		.max(1000)
		.required()
		.error(new ValidationError("%s is required", "message")),
});

