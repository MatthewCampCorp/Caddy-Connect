export type ScheduleItem = {
    id: string;
    date: string;
    time: string;
    notes: string;
    assignment: 'Forecaddie' | 'Single Bag' | 'Double Bag';
  };

  export const scheduleData: ScheduleItem[] = [
    { id: '1', date: '2024-08-05', time: '7:30 AM', notes: 'North Course', assignment: 'Forecaddie' },
    { id: '2', date: '2024-08-06', time: '8:00 AM', notes: 'South Course', assignment: 'Single Bag' },
    { id: '3', date: '2024-08-08', time: '9:15 AM', notes: 'North Course', assignment: 'Double Bag' },
    { id: '4', date: '2024-08-09', time: '7:45 AM', notes: 'South Course', assignment: 'Forecaddie' },
    { id: '5', date: '2024-08-10', time: '1:00 PM', notes: 'North Course', assignment: 'Single Bag' },
  ];
  
  export type Announcement = {
    id: string;
    title: string;
    content: string;
    date: string;
  };
  
  export const announcementsData: Announcement[] = [
    { id: '1', title: 'Annual Caddie Tournament - Sign Up!', date: '2024-07-28', content: 'The annual caddie tournament is scheduled for September 5th. Please sign up in the caddie room by August 20th. It will be a two-man scramble format on the North Course.' },
    { id: '2', title: 'Pace of Play Reminder', date: '2024-07-25', content: 'A friendly reminder to all caddies to help maintain a good pace of play. Please be proactive in getting yardages, reading greens, and keeping up with the group in front of you.' },
    { id: '3', title: 'New Caddie Uniforms Available', date: '2024-07-20', content: 'New Caddie Connect branded uniforms are available for pickup. Please see the caddiemaster to get your new shirt and hat.' },
  ];
  