// src/fixtures/experiencesData.ts

export interface Experience {
  id: string;
  name: string;
  system: string;
  testSuites: string[];
  tags: string[];
}

export const experiencesData: Experience[] = [
  {
    id: '1',
    name: 'Urban Navigation Simulation',
    system: 'AutonomousVehicle-001',
    testSuites: ['Urban Driving', 'Traffic Interaction'],
    tags: ['urban', 'navigation', 'traffic']
  },
  {
    id: '2',
    name: 'Factory Assembly Line Simulation',
    system: 'IndustrialRobot-002',
    testSuites: ['Assembly Efficiency', 'Error Handling'],
    tags: ['factory', 'assembly', 'efficiency']
  },
  {
    id: '3',
    name: 'Drone Delivery Simulation',
    system: 'DeliveryDrone-003',
    testSuites: ['Route Optimization', 'Weather Adaptation'],
    tags: ['delivery', 'drone', 'navigation']
  }
];