import { FileSizePipe } from './file-size.pipe';

describe('FileSizePipe', () => {

  describe('Isolate FileSizePipe test', () => {

    const pipe = new FileSizePipe();

    it('should convert bytes to megabytes', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('should use the default extension when not supplied', () => {
      expect(pipe.transform(123456789)).toBe('117.74MB');
      expect(pipe.transform(987654321)).toBe('941.90MB');
    });

    it('should override the extension when supplied', () => { // This test is testing when we pass the extension, it is getting supplied
      expect(pipe.transform(123456789, 'myExt')).toBe('117.74myExt');
      expect(pipe.transform(987654321, 'anotherExt')).toBe('941.90anotherExt');
    });
  });

});
/**
 *  After setting up our testing environment we are gonna create this spec file to be able to unit test our class.
 */
