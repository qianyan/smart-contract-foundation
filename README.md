Smart Contract Foundation
===
- [x] 合约可以募捐以太币，并给捐赠者记录相应的代币
- [x] 捐赠者可以委托合约将代币发给任何人
- [x] 合约可以执行委托的转账操作
- [x] 被捐赠人可以通过合约取出以太币

## 关于 event 的测试

```
1. 事件定义
event Withdraw(address who, uint amount);

2. 测试断言中可以设置查看
JSON.stringify(events[0]))
->
{"logIndex":0,"transactionIndex":0,"transactionHash":"0xd17de5b0233fb2a3d2c2979ad22fc87e1deb553e327ba56c493640cec794f74c","blockHash":"0xec1089c9
4f03843e4b03cb4b26b79cfe98d35f30146b572b2537a0cc72863cdd","blockNumber":96,"address":"0x95d48cf2a928ed631a7bc6d34f39f154eae9b211","type":"mined","event":"Withdraw","args":{"who
":"0xd373506fc62c6326a693d4848c489653ba66ada2","amount":"9"}}
```
