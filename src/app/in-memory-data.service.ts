import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    data:any =[]
  createDb() {
    const data2 = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const data1 = [
      {
        name: '测试规则1',
        age: 0.01,
        address: 'John Brown',
      }, {
        name: '测试规则2',
        age: 0.01,
        address: 'John Brown',
      }, {
        name: '测试规则3',
        age: 0.01,
        address: 'Jim Red',
      }, {
        name: '测试规则4',
        age: 0.01,
        address: 'Jim Red',
      }
    ];
    return {data1,data2};
  }
}