// ─── Booking Panel ────────────────────────────────────────────────────────────

export interface ApprovalBooking {
  id: number;
  company: string;
  code: number;
  bookingDate: string;
  departureDate: string;
  customer: string;
  agent: string;
}

export interface PendingBooking {
  id: number;
  file: number;
  bookingDate: string;
  travelingDate: string;
  refNo: number;
  paymentDate: string;
  source: number;
  customerName: string;
  card: number;
  bank: number;
  cash: number;
  cheque: number;
  dateAmount: number;
  agent: string;
  brand: string;
}

export interface IssuedBooking {
  id: number;
  file: number;
  bookingDate: string;
  travelingDate: string;
  returnDate: string;
  sopRef: string;
  customerName: string;
  agent: string;
}

// ─── Booking Form Payload ──────────────────────────────────────────────────────

export interface BookingFormPayload {
  supplierName: string;
  supplierReference: string;
  bookingDate: string;
  supplierAgentEmail: string;
  bookingUnderBrand: string;
  payingBy: string;
  payingDueDateTime: string;
  fullName: string;
  phoneNumber: string;
  mobileNumber: string;
  customerEmail: string;
  bookingSource: string;
  departureAirport: string;
  destinationAirport: string;
  flightType: string;
  returnType: string;
  flightClass: string;
  economy: number;
  goingStopover: string;
  returningStopover: string;
  departureDateTime: string;
  airline: string;
  pnr: string;
  pnrExpiryDateTime: string;
  airlineLocator: string;
  flightDetailsCustomer: string;
  flightDetailsSystem1: string;
  flightDetailsSystem2: string;
  bookingNote: string;
  quoteType: string;
  paymentPlan: string;
  basicFare: number;
  tax: number;
  apc: number;
  safi: number;
  misc: number;
  adminChargesExtra: number;
  passengerCategory: string;
  passengerTitle: string;
  firstName: string;
  middleName: string;
  surName: string;
  departureDatePassenger: string;
  salesPrice: number;
  adminCharges: number;
}

// ─── Customer Inquiries ────────────────────────────────────────────────────────

export interface Inquiry {
  sr: number;
  inquiryDate: string;
  inquiryId: string;
  inquiryTitle: string;
  customerEmail: string;
  phone: string;
  brand: string;
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

export interface DashboardStats {
  agentName: string;
  shiftStart: string;
  shiftEnd: string;
  dailyInquiries: number;
  dailyBookingsRevenue: number;
  monthlyInquiries: number;
  monthlyBookingsRevenue: number;
  revenueToday: number;
  monthlyRevenue: number;
  fineToday: number;
  monthlyFine: number;
  bookingsAchieved: number;
  bookingsTarget: number;
  revenueAchieved: number;
  revenueTarget: number;
  currentMonthBookings: number | null;
  currentMonthBookingsTarget: number;
  previousMonthBookings: number | null;
  previousMonthBookingsTarget: number;
  currentMonthRevenue: number | null;
  currentMonthRevenueTarget: number;
  previousMonthRevenue: number | null;
  previousMonthRevenueTarget: number;
}
