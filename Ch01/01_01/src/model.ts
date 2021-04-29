let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();

type Cost = number | string;
let originalCost: Cost = "This is string";

if (typeof originalCost == "number") {
  let cost: number = originalCost;
} else {
  let x = originalCost;
}

enum InventoryItemType {
  Computer = "computer",
  Furniture = "furniture",
}

interface InventoryItem {
  displayName: string;
  inventoryType: InventoryItemType;
  trackingNumber: string;
  createDate: Date;
  originalCost?: number;

  addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem({
  displayName: "MacBook Pro 15 Retina",
  inventoryType: InventoryItemType.Computer,
  trackingNumber: "MBP123456",
  createDate: new Date(),
});

function clone<T>(source: T): T {
  const serialized = JSON.stringify(source);
  return JSON.parse(serialized);
}

const cloned = clone<InventoryItem>(inventoryItem);

declare var Vue: any;
