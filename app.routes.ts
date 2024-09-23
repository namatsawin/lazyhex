// Roots
const todoRoot = "todo";
const contentRoot = "contents";
const liveEventRoot = "live-events";
const liveChannelRoot = "live-channels";
const liveStreamRoot = "live-streams";
const liveSportsEventRoot = "live-sports-event";
const tagRoot = "tags";
const participantRoot = "participants";
const personRoot = "persons";
const contentSeriesRoot = "content-series";
const sportsMatchRoot = "sports-match";
const programOnAirRoot = "program-onair";
const tierRoot = "tiers";

// Api Versions
const v1 = "v1";

export const routesV1 = {
  version: v1,
  healthcheck: {
    root: "health-check",
  },
  todo: {
    root: todoRoot,
    getById: `/${todoRoot}/:id`,
  },
  contents: {
    root: contentRoot,
    create: `/${contentRoot}`,
    getContentById: `/${contentRoot}/:id`,
    updateById: `/${contentRoot}/:id`,
    publish: `/${contentRoot}/:id/publish`,
    unpublish: `/${contentRoot}/:id/unpublish`,
    scheduleContents: `/${contentRoot}/schedule`,
    scheduleContentById: `/${contentRoot}/:id/schedule`,
    assignTier: `/${contentRoot}/:id/tier`,
    duplicateById: `/${contentRoot}/:id/duplicate`,
    deleteById: `/${contentRoot}/:id`,
    deleteBulk: `/${contentRoot}`,
  },
  liveEvent: {
    root: liveEventRoot,
    getById: `/${liveEventRoot}/:id`,
    updateById: `/${liveEventRoot}/:id`,
    startById: `/${liveEventRoot}/:id/start`,
    completeById: `/${liveEventRoot}/:id/complete`,
    cancelById: `/${liveEventRoot}/:id/cancel`,
    deleteById: `/${liveEventRoot}/:id`,
    linkStream: `/${liveEventRoot}/:id/stream`,
    unlinkStream: `/${liveEventRoot}/:id/stream`,
    linkParticipant: `/${liveEventRoot}/:id/participant`,
    unlinkParticipant: `/${liveEventRoot}/:id/participant`,
  },
  liveChannel: {
    root: liveChannelRoot,
    getById: `/${liveChannelRoot}/:id`,
    updateById: `/${liveChannelRoot}/:id`,
    deleteById: `/${liveChannelRoot}/:id`,
    linkScheduleProgram: `/${liveChannelRoot}/:id/schedule-program`,
    unlinkScheduleProgram: `/${liveChannelRoot}/:id/schedule-program`,
  },
  liveStream: {
    root: liveStreamRoot,
    create: liveStreamRoot,
    updateById: `/${liveStreamRoot}/:id`,
    getById: `/${liveStreamRoot}/:id`,
    getStreamURLByVcid: `/${liveStreamRoot}/:vcid/url`,
  },
  liveSportsEvent: {
    root: liveSportsEventRoot,
    create: `/${liveSportsEventRoot}`,
    updateById: `/${liveSportsEventRoot}/:id`,
    linkSportsMatchById: `/${liveSportsEventRoot}/:id/sportmatch`,
    unlinkSportsMatchById: `/${liveSportsEventRoot}/:id/sportmatch`,
    linkStreamToEventById: `/${liveSportsEventRoot}/:id/stream`,
  },
  tags: {
    root: tagRoot,
    create: `/${tagRoot}`,
    updateById: `/${tagRoot}/:id`,
    deleteById: `/${tagRoot}/:id`,
    getById: `/${tagRoot}/:id`,
  },
  participant: {
    root: participantRoot,
    updateById: `/${participantRoot}/:id`,
    getById: `/${participantRoot}/:id`,
  },
  persons: {
    root: personRoot,
    create: `/${personRoot}`,
  },
  contentSeries: {
    root: contentSeriesRoot,
    create: `${contentSeriesRoot}`,
    updateById: `${contentSeriesRoot}/:id`,
    getById: `${contentSeriesRoot}/:id`,
  },
  sportsMatch: {
    root: sportsMatchRoot,
    create: `/${sportsMatchRoot}`,
  },
  programOnAir: {
    root: programOnAirRoot,
  },
  tiers: {
    root: tierRoot,
    create: `/${tierRoot}`,
  },

  wow: {
    getById: `/wowRoot/:id`,
    create: `/wowRoot`,
    updateById: `/wowRoot/:id`,
    deleteById: `/wowRoot/:id`,
  },
  ww: {
    getById: `/wwRoot/:id`,
    create: `/wwRoot`,
    updateById: `/wwRoot/:id`,
    deleteById: `/wwRoot/:id`,
  },
  erere: {
    getById: `/erere/:id`,
    create: `/erere`,
    updateById: `/erere/:id`,
    deleteById: `/erere/:id`,
  },
  tetet: {
    root: `tetet`,
    getById: `/tetet/:id`,
    create: `/tetet`,
    updateById: `/tetet/:id`,
    deleteById: `/tetet/:id`,
  },
};
