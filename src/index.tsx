import detectEthereumProvider from "@metamask/detect-provider";

const accountsChanged = async (provider: any) => {
  console.log("CHANGED");
  const accounts = await provider.request({ method: "eth_accounts" });
  console.log(`We have accounts: ${JSON.stringify(accounts)}`);
};

const main = async () => {
  const provider: any = await detectEthereumProvider();
  provider.on("accountsChanged", () => {
    accountsChanged(provider);
  });
  await provider.request({
    method: "wallet_requestPermissions",
    params: [
      {
        eth_accounts: {},
      },
    ],
  });
};

main();
