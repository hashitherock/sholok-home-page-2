import { describe, it, expect } from 'vitest';
import { services, searchPortal } from '@/lib/portal-data';
describe('SHOLOK portal',()=>{
 it('provides exactly the 17 requested services',()=>{expect(services.map(s=>s.slug)).toEqual(['cafe','blog','shopping','news','smartstore','map','knowledge','webtoon','series','tv','music','translate','dictionary','finance','sports','weather','realestate']);expect(services).toHaveLength(17)});
 it('searches local services without case sensitivity',()=>{expect(searchPortal('SHOPPING').services.map(s=>s.slug)).toContain('shopping');expect(searchPortal('not-a-real-service-123').services).toHaveLength(0)});
});
