import { create } from 'zustand';
import type { ApprovalBooking, PendingBooking, IssuedBooking, BookingFormPayload } from './types';

// ─── Initial mock data ────────────────────────────────────────────────────────

const initialApprovals: ApprovalBooking[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  company: 'Sky snap tarave....',
  code: 1634543,
  bookingDate: '01/01/2026',
  departureDate: '01/01/2026',
  customer: '',
  agent: '',
}));

const initialRejected: ApprovalBooking[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  company: 'Sky snap tarave....',
  code: 1634543,
  bookingDate: '01/01/2026',
  departureDate: '01/01/2026',
  customer: '',
  agent: '',
}));

const initialPending: PendingBooking[] = Array.from({ length: 55 }, (_, i) => ({
  id: i + 1,
  file: 0,
  bookingDate: '01/01/2026',
  travelingDate: '01/01/2026',
  refNo: 12432343 + i,
  paymentDate: '01/01/2026',
  source: 45332,
  customerName: 'john',
  card: 0,
  bank: 0,
  cash: 0,
  cheque: 0,
  dateAmount: 0,
  agent: i % 2 === 0 ? 'amjad' : 'ali',
  brand: i % 2 === 0 ? 'Sky' : 'TravelCo',
}));

const initialIssued: IssuedBooking[] = Array.from({ length: 55 }, (_, i) => ({
  id: i + 1,
  file: 1000 + i,
  bookingDate: '01/01/2026',
  travelingDate: '05/01/2026',
  returnDate: '10/01/2026',
  sopRef: 'SOP-' + (5000 + i),
  customerName: 'john',
  agent: i % 2 === 0 ? 'amjad' : 'ali',
}));

const initialCleared: IssuedBooking[] = Array.from({ length: 55 }, (_, i) => ({
  id: i + 1,
  file: 1000 + i,
  bookingDate: '01/01/2026',
  travelingDate: '05/01/2026',
  returnDate: '10/01/2026',
  sopRef: 'SOP-' + (5000 + i),
  customerName: 'john',
  agent: i % 2 === 0 ? 'amjad' : 'ali',
}));

const initialCancelled: IssuedBooking[] = Array.from({ length: 55 }, (_, i) => ({
  id: i + 1,
  file: 1000 + i,
  bookingDate: '01/01/2026',
  travelingDate: '05/01/2026',
  returnDate: '10/01/2026',
  sopRef: 'SOP-' + (5000 + i),
  customerName: 'john',
  agent: i % 2 === 0 ? 'amjad' : 'ali',
}));

// ─── Store ────────────────────────────────────────────────────────────────────

interface BookingStore {
  approvals: ApprovalBooking[];
  rejected: ApprovalBooking[];
  pending: PendingBooking[];
  issued: IssuedBooking[];
  cleared: IssuedBooking[];
  cancelled: IssuedBooking[];

  // Actions
  addPendingBooking: (payload: BookingFormPayload) => Promise<void>;
  approveBooking: (id: number) => void;
  rejectBooking: (id: number) => void;
  cancelBooking: (id: number) => void;
}

let pendingIdCounter = initialPending.length + 1;

export const useBookingStore = create<BookingStore>((set) => ({
  approvals: initialApprovals,
  rejected: initialRejected,
  pending: initialPending,
  issued: initialIssued,
  cleared: initialCleared,
  cancelled: initialCancelled,

  addPendingBooking: async (payload) => {

    try {

      console.log("Sending booking data:", payload);

      const res = await fetch("http://localhost:5000/api/booking/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("API Response status:", res.status);

      const data = await res.json();

      console.log("API Response data:", data);

      if (data.success) {
        console.log("Booking saved in database!");
      }

    } catch (error) {
      console.error("Booking API error:", error);
    }

  },

  approveBooking: (id) =>
    set((state) => ({
      approvals: state.approvals.filter((b) => b.id !== id),
    })),

  rejectBooking: (id) =>
    set((state) => {
      const booking = state.approvals.find((b) => b.id === id);
      if (!booking) return {};
      return {
        approvals: state.approvals.filter((b) => b.id !== id),
        rejected: [...state.rejected, booking],
      };
    }),

  cancelBooking: (id) =>
    set((state) => {
      const booking = state.pending.find((b) => b.id === id);
      if (!booking) return {};
      const cancelledBooking: IssuedBooking = {
        id: booking.id,
        file: booking.file,
        bookingDate: booking.bookingDate,
        travelingDate: booking.travelingDate,
        returnDate: '',
        sopRef: '',
        customerName: booking.customerName,
        agent: booking.agent,
      };
      return {
        pending: state.pending.filter((b) => b.id !== id),
        cancelled: [...state.cancelled, cancelledBooking],
      };
    }),
}));
