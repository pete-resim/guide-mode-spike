// src/fixtures/analyticsData.ts

export interface TestBatch {
  id: string;
  exitStatus: 'success' | 'failure' | 'error';
  branch: string;
  buildVersion: string;
  system: string;
  executionTime: string;
}

export const testBatchesData: TestBatch[] = [
  {
    id: '1',
    exitStatus: 'success',
    branch: 'main',
    buildVersion: 'v1.2.3',
    system: 'AutonomousVehicle-001',
    executionTime: '2023-09-24T14:15:22Z'
  },
  {
    id: '2',
    exitStatus: 'failure',
    branch: 'feature/new-sensor',
    buildVersion: 'v1.2.4-beta',
    system: 'IndustrialRobot-002',
    executionTime: '2023-09-24T16:30:45Z'
  },
  {
    id: '3',
    exitStatus: 'success',
    branch: 'hotfix/navigation-bug',
    buildVersion: 'v1.2.3-patch1',
    system: 'DeliveryDrone-003',
    executionTime: '2023-09-25T09:12:33Z'
  }
];