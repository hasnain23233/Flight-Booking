import { create } from 'zustand';
import type { Inquiry } from './types';

// ─── Initial mock data ────────────────────────────────────────────────────────

const initialNewInquiries: Inquiry[] = [
  {
    sr: 1,
    inquiryDate: '2026-01-25',
    inquiryId: 'INQ001',
    inquiryTitle: 'Flight to Dubai',
    customerEmail: 'john@example.com',
    phone: '+1 555 123 4567',
    brand: 'SkyTravel',
  },
  {
    sr: 2,
    inquiryDate: '2026-01-26',
    inquiryId: 'INQ002',
    inquiryTitle: 'Europe Tour Inquiry',
    customerEmail: 'sarah@example.com',
    phone: '+1 555 789 1234',
    brand: 'HolidayWorld',
  },
];

const initialUmrahInquiries: Inquiry[] = [
  {
    sr: 1,
    inquiryDate: '2026-01-27',
    inquiryId: 'UMR001',
    inquiryTitle: 'Umrah Family Package',
    customerEmail: 'ali@example.com',
    phone: '+966 555 444 222',
    brand: 'HolyTrips',
  },
];

const initialBrands: string[] = [
  '--Select Brand--',
  'SkyTravel',
  'HolidayWorld',
  'HolyTrips',
  'FlyAway',
];

// ─── Store ────────────────────────────────────────────────────────────────────

interface InquiryStore {
  newInquiries: Inquiry[];
  umrahInquiries: Inquiry[];
  brands: string[];

  // Actions
  addNewInquiry: (inquiry: Omit<Inquiry, 'sr'>) => void;
  addUmrahInquiry: (inquiry: Omit<Inquiry, 'sr'>) => void;
  addBrand: (brand: string) => void;
}

export const useInquiryStore = create<InquiryStore>((set) => ({
  newInquiries: initialNewInquiries,
  umrahInquiries: initialUmrahInquiries,
  brands: initialBrands,

  addNewInquiry: (inquiry) =>
    set((state) => ({
      newInquiries: [
        ...state.newInquiries,
        { ...inquiry, sr: state.newInquiries.length + 1 },
      ],
    })),

  addUmrahInquiry: (inquiry) =>
    set((state) => ({
      umrahInquiries: [
        ...state.umrahInquiries,
        { ...inquiry, sr: state.umrahInquiries.length + 1 },
      ],
    })),

  addBrand: (brand) =>
    set((state) => ({
      brands: [...state.brands, brand],
    })),
}));
