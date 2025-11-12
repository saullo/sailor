import { z } from "./z";

const clientEnvSchema = z.object({
	VITE_APP_NAME: z.string(),
});

const clientEnv = clientEnvSchema.parse(import.meta.env);

export { clientEnv };
