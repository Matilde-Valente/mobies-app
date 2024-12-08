import { getPopularSeries, getSeriesDetails } from './getPopularSeries';

// Mock the global fetch function
global.fetch = jest.fn() as jest.Mock;

describe('Series Service', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear(); // Clear the mock before each test
  });

  describe('getPopularSeries', () => {
    it('should fetch popular series and return data', async () => {
      const mockResponse = { results: [{ id: 1, name: 'Series A' }] };
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      const result = await getPopularSeries();

      expect(fetch).toHaveBeenCalledWith('/api/tv/popular', {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      });
      expect(result).toEqual(mockResponse);
    });

    it('should handle fetch errors', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      const result = await getPopularSeries();

      expect(fetch).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith(new Error('Network error'));
      expect(result).toBeUndefined();

      consoleSpy.mockRestore();
    });
  });

  describe('getSeriesDetails', () => {
    it('should fetch series details and return data', async () => {
      const seriesId = '1';
      const mockResponse = { id: '1', name: 'Series A' };
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      const result = await getSeriesDetails({ id: seriesId });

      expect(fetch).toHaveBeenCalledWith(`/api/tv/${seriesId}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      });
      expect(result).toEqual(mockResponse);
    });

    it('should handle fetch errors', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      const result = await getSeriesDetails({ id: '1' });

      expect(fetch).toHaveBeenCalled();
      expect(consoleSpy).toHaveBeenCalledWith(new Error('Network error'));
      expect(result).toBeUndefined();

      consoleSpy.mockRestore();
    });
  });
});
