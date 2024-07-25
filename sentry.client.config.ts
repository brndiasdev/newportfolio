// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://3b7a5f45b066896d54a692c9ced15d43@o4507528048869376.ingest.us.sentry.io/4507528052539392",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
      triggerLabel: "Reportar um Erro",
      formTitle: "Reportar um Erro",
      submitButtonLabel: "Enviar Erro",
      cancelButtonLabel: "Cancelar",
      confirmButtonLabel: "Confirmar",
      addScreenshotButtonLabel: "Adicionar Imagem",
      removeScreenshotButtonLabel: "Remover Imagem",
      nameLabel: "Nome",
      namePlaceholder: "Seu Nome",
      emailPlaceholder: "seu.email@gmail.com",
      messageLabel: "Descrição do Erro",
      messagePlaceholder: "Qual é o Erro? O que deveria acontecer?",
      successMessageText: "Obrigado por Reportar o Erro!",
    }),
  ],
});
