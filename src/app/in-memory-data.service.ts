import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  data: any = []
  createDb() {
    const data2 = [
      { name: 'Zero', age: '1', address: '*******' },
      { name: 'Mr. Nice', age: '2', address: '*******' },
      { name: 'Narco', age: '3', address: '*******' },
      { name: 'Bombasto', age: '14', address: '*******' },
      { name: 'Celeritas', age: '15', address: '*******' },
      { name: 'Magneta', age: '16', address: '*******' },
      { name: 'RubberMan', age: '11', address: '*******' },
      { name: 'Dynama', age: '12', address: '*******' },
      { name: 'Dr IQ', age: '13', address: '*******' },
      { name: 'Magma', age: '11', address: '*******' },
      { name: 'Tornado', age: '10', address: '*******' }
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
    return { data1, data2 };
  }
}