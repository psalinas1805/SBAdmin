import { DetailacuarioModule } from './detailacuario.module';

describe('DetailacuarioModule', () => {
  let detailacuarioModule: DetailacuarioModule;

  beforeEach(() => {
    detailacuarioModule = new DetailacuarioModule();
  });

  it('should create an instance', () => {
    expect(detailacuarioModule).toBeTruthy();
  });
});
