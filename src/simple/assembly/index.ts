import { storage, Context } from "near-sdk-as"
// storage -> blockchain storage 
// context -> blockchain context - send out money
// return the string 'hello world'
// Context.contractName -> 
// Context.sender -? sender contracts
// Context.predecessor 
export function helloWorld(): string {
  return 'hello world'
}

// read the given key from account (contract) storage
export function read(key: string): string {
  if (storage.hasKey(key)) {
    return `✅ Key [ ${key} ] has value [ ${storage.getString(key)!} ]`
  } else {
    return `🚫 Key [ ${key} ] not found in storage. ( ${storageReport()} )`
  }
}

// write the given value at the given key to account (contract) storage
export function write(key: string, value: string): string {
  storage.set(key, value)
  return `✅ Data saved. ( ${storageReport()} )`
}

// private helper method used by read() and write() above
function storageReport(): string {
  return `storage [ ${Context.storageUsage} bytes ]`
}

// generate to assembly file
// how much data bllablabala