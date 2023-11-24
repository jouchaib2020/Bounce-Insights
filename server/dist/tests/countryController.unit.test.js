"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const countries_1 = require("../controllers/countries");
jest.mock('node-fetch');
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
        node_fetch_1.default.mockClear();
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
        node_fetch_1.default.mockResolvedValue({
            ok: true,
            json: async () => mockCountry,
        });
        await (0, countries_1.getCountryByName)(mockRequest, mockResponse);
        expect(node_fetch_1.default).toHaveBeenCalledWith('https://restcountries.com/v3.1/name/Germany?fullText=true');
        expect(mockResponse.status).toHaveBeenCalledWith(200);
    });
    it('should handle non-successful response', async () => {
        node_fetch_1.default.mockResolvedValue({
            ok: false,
            status: 404,
        });
        await (0, countries_1.getCountryByName)(mockRequest, mockResponse);
        expect(node_fetch_1.default).toHaveBeenCalled();
        expect(mockResponse.status).toHaveBeenCalledWith(404);
        expect(mockResponse.send).toHaveBeenCalledWith('Failed to fetch data from the API: ...');
    });
    // TODO: Add more tests
});
