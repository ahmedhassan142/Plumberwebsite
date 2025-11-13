import { Metadata } from 'next';
import EmergencyContact from '@/app/components/sections/EmergencyContact';

export const metadata: Metadata = {
  title: 'Emergency Plumbing Service - ProFlow Plumbing',
  description: '24/7 emergency plumbing service. Immediate response for burst pipes, leaks, and other plumbing emergencies.',
};

export default function EmergencyPage() {
  return (
    <div className="bg-white min-h-screen">
      <EmergencyContact />
    </div>
  );
}