"use strict";

module.exports = {
  name: "pages",

  /**
   * Service settings
   * More info: https://moleculer.services/docs/0.13/services.html#Settings
   */
  settings: {
    rest: "/"
  },

  /**
   * Service dependencies
   * More info: https://moleculer.services/docs/0.13/services.html#Dependencies
   */
  dependencies: [],

  /**
   * Service Actions
   * More info: https://moleculer.services/docs/0.13/actions.html
   */
  actions: {
    // Action handlers
  },

  /**
   * Service Events
   * More info: https://moleculer.services/docs/0.13/events.html
   */
  events: {},

  /**
   * Service Methods
   * More info: https://moleculer.services/docs/0.13/services.html#Methods
   */
  methods: {},

  /**
   * Service created lifecycle event handler
   * More info: https://moleculer.services/docs/0.13/lifecycle.html#created-event-handler
   */
  created() {},

  /**
   * Service started lifecycle event handler
   * More info: https://moleculer.services/docs/0.13/lifecycle.html#started-event-handler
   */
  async started() {},

  /**
   * Service stopped lifecycle event handler
   * More info: https://moleculer.services/docs/0.13/lifecycle.html#stopped-event-handler
   */
  async stopped() {}
};
