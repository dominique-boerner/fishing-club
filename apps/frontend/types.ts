import type { RouteRecordRaw } from 'vue-router';

export type Route = RouteRecordRaw & {
  icon: string;
  visible: boolean;
};
