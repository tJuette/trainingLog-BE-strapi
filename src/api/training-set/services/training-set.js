'use strict';

/**
 * training-set service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::training-set.training-set');
