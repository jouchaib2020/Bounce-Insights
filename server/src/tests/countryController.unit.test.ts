import { Request, Response } from 'express';
import fetch from 'node-fetch';
import { getCountryByName } from '../controllers/countries';
import { mapCountryToCountryResponse } from '../utils/utils';

// Mock the fetch function
jest.mock('node-fetch');

const mockFetch = jest.mocked(fetch);

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

    mockFetch.mockClear();
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

    mockFetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockCountry)
    })

    await getCountryByName(mockRequest as Request, mockResponse as Response);

    expect(mockFetch).toHaveBeenCalledWith(
      'https://restcountries.com/v3.1/name/Germany?fullText=true'
    );
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalledWith(mapCountryToCountryResponse(mockCountry[0]));
  });

  it('should handle non-successful response', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 404,
    });

    await getCountryByName(mockRequest as Request, mockResponse as Response);

    expect(mockFetch).toHaveBeenCalled();
    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.send).toHaveBeenCalledWith('Failed to fetch data from the API: ...');
  });

  // Add more tests as needed...
});
