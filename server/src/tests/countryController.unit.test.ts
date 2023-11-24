import { Request, Response } from 'express';
import fetch from 'node-fetch';
import { getCountryByName } from '../controllers/countries';
jest.mock('node-fetch');



describe('getCountryByName', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {
      params: {
        name: 'Germany',
      },
    };

    mockResponse = {
      status: jest.fn(),
      send: jest.fn(),
    };

    (fetch as unknown as jest.Mock).mockClear();
    });

  it('should fetch country by name successfully', async () => {
    const mockCountry = [
      {
        name: {
          common: 'Germany',
        },
        // Other country properties...
      },
    ];

    (fetch as unknown as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockCountry,
    });

    await getCountryByName(mockRequest as Request, mockResponse as Response);

    expect(fetch).toHaveBeenCalledWith(
      'https://restcountries.com/v3.1/name/Germany?fullText=true'
    );
    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });


  it('should handle non-successful response', async () => {
    (fetch as unknown as jest.Mock).mockResolvedValue({
      ok: false,
      status: 404,
    });

    await getCountryByName(mockRequest as Request, mockResponse as Response);

    expect(fetch).toHaveBeenCalled();
    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.send).toHaveBeenCalledWith('Failed to fetch data from the API: ...');
  });

  // TODO: Add more tests
});
