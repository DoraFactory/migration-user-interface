import { ReactNode } from 'react';

import {
  APP_STRING_KEYS,
  ERRORS_STRING_KEYS,
  LOCALE_DATA,
  TOKEN_MIGRATION_STRING_KEYS,
  TOOLTIPS,
  WARNINGS_STRING_KEYS,
} from '@dydxprotocol/v4-localization';

export { TOOLTIP_STRING_KEYS } from '@dydxprotocol/v4-localization';

export enum SupportedLocales {
  EN = 'en',
  // ZH_CN = 'zh-CN',
  // JA = 'ja',
  // KO = 'ko',
  // RU = 'ru',
  // TR = 'tr',
  // FR = 'fr',
  // PT = 'pt',
  // ES = 'es',
  // DE = 'de',
}

export const DORA_KEYS = {
  "DORA_CHAIN_SETTLEMENT": 'Dora Vota settlement',
  "DORA_EXPLORER" : 'Dora Vota Explorer',
  "VOTA_CHAIN" : 'Dora Vota',
  "ETHEREUM": 'Ethereum'
}

export const DORA_LONG_SENTENCE = {
  "CONFIRM_MIGRATION_DISCLAIMER_1": "I understand it may take 48~96 hours until my tokens are available on the Dora Vota.",
  "CONFIRM_MIGRATION_DISCLAIMER_2": "I understand that my ethDORA tokens will be sent to a black hole address for permanent destruction in the Bridge Smart Contract and irrecoverable.",
  "PENDING_MIGRATIONS_DESCRIPTION_I": 'This table lists all pending DORA token migrations from Ethereum to the Dora Vota. It refreshes periodically or upon a manual page reload.',
  "PENDING_MIGRATIONS_DESCRIPTION_II": 'Once a pending migration is listed, the migration will be completed within ~48 hours. Once the migration has been settled, it will be removed from this table during the next automatic update or when the page is manually refreshed.',
  "PENDING_MIGRATIONS_DESCRIPTION_III": 'However, you can see all your migration records (including those that are pending or have been settled) in the ‘Mine’ tab. Please note that if the migration is pending, the Transaction Hash will display as ‘Pneding migration’. If your migration is settled, it will display the link of transaction hash of the successful migration on the Dora Vota.',
  "MIGRATION_FAQ_DORA_CHAIN_PORTAL": "What is the Dora Vota Migration Portal?",
  "MIGRATION_FAQ_DORA_CHAIN_PORTAL_ANSWER": "The Dora Factory community is migrating the Ethereum ERC-20 DORA tokens (ethDORA) to the Dora Vota appchain. This portal assists ethDORA holders in engaging with the Ethereum smart contract to migrate their DORA tokens from Ethereum to the Dora Vota appchain.",
  "MIGRATION_FAQ_WHAT_ADDRESS_CAN_INTERACT": "What addresses can interact with the portal to migrate ethDORA to Dora Vota Chain?",
  "MIGRATION_FAQ_WHAT_ADDRESS_CAN_INTERACT_ANSWER": "Only Ethereum addresses holding Ethereum ERC20 DORA can successfully interact with the token migration smart contract to proceed with the token migration.",
  "MIGRATION_FAQ_GAS_FEES_ANSWER": "Please note that a gas fee will be charged during the token migration process. The user will pay all gas fees incurred.",
  "MIGRATION_FAQ_GAS_FEES": "Who will be paying the migration gas fees?",
  "MIGRATION_FAQ_HOW_LONG_ANSWER": "The migration will be finished within 96 hours. Note that the migration time is subject to change. As more addresses complete token migration, expected token migration time will prolong.",
  "MIGRATION_FAQ_HOW_LONG": "How long should the migration take?",
  "MIGRATION_FAQ_CUSTODY_TOKEN": "Will the token migration portal custody my tokens?",
  "MIGRATION_FAQ_CUSTODY_TOKEN_ANSWER": "Please note that the token migration portal and the smart contracts are non-custodial. You will interact with the smart contract to receive DORA on the Dora Vota Chain. After migration, your ethDORA tokens will be burnt (sent to a null address).",
  "MIGRATION_FAQ_CONTRACR_TOKEN": "What should I do if my ethDORA tokens are in a Contract address/Safe?",
  "MIGRATION_FAQ_CONTRACR_TOKEN_ANSWER":"If your ethDORA tokens are in a Contract address, please contact @doravota on Telegram. We can help you manually complete the migration process. If your ethDORA tokens are in an Ethereum Gnosis Safe, please transfer them to an EOA address to engage with the migration portal and proceed with the migration. Please make sure you transfer the tokens securely, and you will be solely responsible for the operation.",
  "MIGRATION_FAQ_VCDORA_HOLDER": "What will happen for vcDORA holders?",
  "MIGRATION_FAQ_VCDORA_HOLDER_ANSWER": "vcDORA credits on the vcDORA Ethereum smart contract will still be valid until all DORA tokens staked in the vcDORA smart contract exit. Once you can withdraw your ethDORA from the vcDORA smart contract, you can immediately engage with the migration portal. If you still cannot withdraw from the vcDORA smart contract, please don’t worry as the vcDORA contract will remain and be maintained on Eththeum.",
  "MIGRATION_FAQ_HOW_TO_TRACK_ANSWER": "Please use https://vota-migration.dorafactory.org/ to track migration status.",
  "MIGRATION_FAQ_HOW_TO_TRACK": "How can I track the migration status?",
  "MIGRATION_FAQ_WHAT_TOKENS": "What tokens will I receive?",
  "MIGRATION_BLOCKED_MESSAGE_DESTINATION": "Because the destination address appears to be a resident of, or using this user interface from, a jurisdiction that violates our terms of use, or has engaged in activity that violates our terms of use, the destination address has been blocked and this transaction cannot be completed.",
}

export const EN_LOCALE_DATA = {
  ...LOCALE_DATA[SupportedLocales.EN],
  TOOLTIPS: TOOLTIPS[SupportedLocales.EN],
};

export const STRING_KEYS = {
  ...APP_STRING_KEYS,
  ...TOKEN_MIGRATION_STRING_KEYS,
  ...ERRORS_STRING_KEYS,
  ...WARNINGS_STRING_KEYS,
};

export type LocaleData = typeof EN_LOCALE_DATA;

export type StringGetterFunction = (a: {
  key: string;
  params?: {
    [key: string]: ReactNode;
  };
}) => string | Array<string | React.ReactNode>;

export const SUPPORTED_LOCALE_STRING_LABELS: {
  [key in SupportedLocales]: string;
} = {
  [SupportedLocales.EN]: 'English',
  // [SupportedLocales.ZH_CN]: '中文',
  // [SupportedLocales.JA]: '日本語',
  // [SupportedLocales.KO]: '한국어',
  // [SupportedLocales.RU]: 'русский',
  // [SupportedLocales.TR]: 'Türkçe',
  // [SupportedLocales.FR]: 'Français',
  // [SupportedLocales.PT]: 'Português',
  // [SupportedLocales.ES]: 'Español',
  // [SupportedLocales.DE]: 'Deutsch',
};

export const SUPPORTED_LOCALE_BASE_TAGS = {
  [SupportedLocales.EN]: 'en',
  // [SupportedLocales.ZH_CN]: 'zh',
  // [SupportedLocales.JA]: 'ja',
  // [SupportedLocales.KO]: 'ko',
  // [SupportedLocales.RU]: 'ru',
  // [SupportedLocales.TR]: 'tr',
  // [SupportedLocales.FR]: 'fr',
  // [SupportedLocales.PT]: 'pt',
  // [SupportedLocales.ES]: 'es',
  // [SupportedLocales.DE]: 'de',
};

export const SUPPORTED_BASE_TAGS_LOCALE_MAPPING = Object.fromEntries(
  Object.entries(SUPPORTED_LOCALE_BASE_TAGS).map(([locale, baseTag]) => [baseTag, locale])
);

export type TooltipStrings = {
  [key: string]: ({
    stringGetter,
    stringParams,
  }: {
    stringGetter: StringGetterFunction;
    stringParams?: Record<string, string>;
  }) => {
    title: string | ReactNode[];
    body: string | ReactNode[];
    learnMoreLink?: string;
  };
};
