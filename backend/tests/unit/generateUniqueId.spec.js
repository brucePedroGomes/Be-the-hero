import generateUniqueId from '../../src/utils/generateUniqueId';

describe('Generate Unique ID', () => {
  it('should generate an unique iD', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(12);
  });
});
