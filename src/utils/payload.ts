import { getPayload } from "payload";

import payloadConfig from "@payload-config";

export const payload = await getPayload({ config: payloadConfig });
