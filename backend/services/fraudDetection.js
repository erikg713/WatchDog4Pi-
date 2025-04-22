export function isTransactionSuspicious(tx) {
  const scamVendors = ['fake-store', 'scam-pi-gifts'];
  const maxAmount = 1000;

  if (tx.amount > maxAmount) return true;
  if (scamVendors.includes(tx.vendor.toLowerCase())) return true;
  return false;
}
