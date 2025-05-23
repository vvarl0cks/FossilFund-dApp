'use client';

import { useWalletKit } from '@mysten/dapp-kit';
import { Button } from '@/components/ui/button';

export default function ConnectWallet() {
  const { openModal, currentAccount, disconnect } = useWalletKit();

  if (currentAccount) {
    return (
      <Button
        onClick={() => disconnect()}
        className="font-semibold px-4 py-2 sm:px-6 sm:py-3 shadow-md rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-primary-foreground hover:opacity-90"
      >
        {`${currentAccount.address.slice(0, 4)}...${currentAccount.address.slice(-4)} (Disconnect)`}
      </Button>
    );
  }

  return (
    <Button
      onClick={openModal}
      className="font-semibold px-4 py-2 sm:px-6 sm:py-3 shadow-md rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-primary-foreground hover:opacity-90"
    >
      Connect Wallet
    </Button>
  );
}
