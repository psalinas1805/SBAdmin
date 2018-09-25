import { DetailuserModule } from './detailuser.module';

describe('DetailuserModule', () => {
  let detailuserModule: DetailuserModule;

  beforeEach(() => {
    detailuserModule = new DetailuserModule();
  });

  it('should create an instance', () => {
    expect(detailuserModule).toBeTruthy();
  });
});
