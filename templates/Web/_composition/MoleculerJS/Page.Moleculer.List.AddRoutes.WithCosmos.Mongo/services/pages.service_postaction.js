  /**
   * Service Actions
   * More info: https://moleculer.services/docs/0.13/actions.html
   */
  actions: {
    // Action handlers
  //{[{
    listGet: {
      rest: "GET /list",
      handler(ctx) {
        // Call find method that was loaded with `db.mixin.js`
        return this._find(ctx, ctx.params);
      }
    },
    listPost: {
      rest: "POST /list",
      /**
       * Param validation.
       * More info: https://moleculer.services/docs/0.13/validating.html
       */
      params: {
        text: { type: "string" }, // required field
        $$strict: true // no additional properties allowed
      },
      handler(ctx) {
        // Call create method that was loaded with `db.mixin.js`
        return this._create(ctx, ctx.params);
      }
    },
    listDelete: {
      rest: "DELETE /list/:_id",
      /**
       * Param validation.
       * More info: https://moleculer.services/docs/0.13/validating.html
       */
      params: {
        _id: { type: "string" }, // required filed
        $$strict: true // no additional properties allowed
      },
      handler(ctx) {
        // Call remove method that was loaded with `db.mixin.js`
        return this._remove(ctx, { id: ctx.params._id });
      }
    },
  //}]}
  },