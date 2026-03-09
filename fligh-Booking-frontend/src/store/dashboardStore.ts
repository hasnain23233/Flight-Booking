import { create } from 'zustand';
import type { DashboardStats } from './types';

// ─── Store ────────────────────────────────────────────────────────────────────

interface DashboardStore extends DashboardStats {
  setAgentName: (name: string) => void;
  setShiftTimes: (start: string, end: string) => void;
  setStats: (partial: Partial<DashboardStats>) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  // Agent / shift
  agentName: 'Amjad',
  shiftStart: '14:00:00',
  shiftEnd: '23:00:00',

  // Stat cards
  dailyInquiries: 0,
  dailyBookingsRevenue: 0,
  monthlyInquiries: 1,
  monthlyBookingsRevenue: 0,
  revenueToday: 90,
  monthlyRevenue: 0,
  fineToday: 0,
  monthlyFine: 0,

  // Circular graphs
  bookingsAchieved: 2,
  bookingsTarget: 10,
  revenueAchieved: 500,
  revenueTarget: 1000,

  // Bookings summary table
  currentMonthBookings: null,
  currentMonthBookingsTarget: 10,
  previousMonthBookings: null,
  previousMonthBookingsTarget: 10,

  // Revenue summary table
  currentMonthRevenue: null,
  currentMonthRevenueTarget: 10,
  previousMonthRevenue: null,
  previousMonthRevenueTarget: 10,

  // Actions
  setAgentName: (name) => set({ agentName: name }),

  setShiftTimes: (start, end) => set({ shiftStart: start, shiftEnd: end }),

  setStats: (partial) => set((state) => ({ ...state, ...partial })),
}));
