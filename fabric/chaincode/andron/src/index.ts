/*
 * SPDX-License-Identifier: Apache-2.0
 */

import { walletController } from './subcontracts/wallet/walletController';
import { transactionController } from './subcontracts/transaction/transactionController';
import { settingsController } from './subcontracts/settings/settingsController';
import { depositController } from './subcontracts/deposit/depositController';
import { andronHistoryController } from './subcontracts/history/andronHistoryController';

export { walletController } from './subcontracts/wallet/walletController';
export { transactionController } from './subcontracts/transaction/transactionController';
export { settingsController } from './subcontracts/settings/settingsController';
export { depositController } from './subcontracts/deposit/depositController';
export { andronHistoryController } from './subcontracts/history/andronHistoryController';


export const contracts: any[] = [transactionController, walletController, settingsController, depositController, andronHistoryController];
