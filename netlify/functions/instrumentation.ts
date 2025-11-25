import { NodeSDK } from "@opentelemetry/sdk-node";
import { LangfuseSpanProcessor } from "@langfuse/otel";

const sdk = new NodeSDK({
  resourceDetectors: [],
  spanProcessors: [new LangfuseSpanProcessor()],
});

sdk.start();
