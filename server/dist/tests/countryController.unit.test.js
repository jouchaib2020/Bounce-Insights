"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const countries_1 = require("../controllers/countries");
const utils_1 = require("../utils/utils");
// Mock the fetch function
jest.mock('node-fetch');
const mockFetch = jest.mocked(node_fetch_1.default);
describe('getCountryByName', () => {
    let mockRequest;
    let mockResponse;
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
        });
        await (0, countries_1.getCountryByName)(mockRequest, mockResponse);
        expect(mockFetch).toHaveBeenCalledWith('https://restcountries.com/v3.1/name/Germany?fullText=true');
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.send).toHaveBeenCalledWith((0, utils_1.mapCountryToCountryResponse)(mockCountry[0]));
    });
    it('should handle non-successful response', async () => {
        mockFetch.mockResolvedValue({
            ok: false,
            status: 404,
        });
        await (0, countries_1.getCountryByName)(mockRequest, mockResponse);
        expect(mockFetch).toHaveBeenCalled();
        expect(mockResponse.status).toHaveBeenCalledWith(404);
        expect(mockResponse.send).toHaveBeenCalledWith('Failed to fetch data from the API: ...');
    });
    // Add more tests as needed...
});
