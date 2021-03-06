/**
 * Contains endpoints related to devices.
 */
'use strict';

const DeviceService = require('../services/DeviceService');

/**
 * Create device.
 * @param req the request
 * @param res the response
 */
function* create(req, res) {
  res.json(yield DeviceService.create(req.body));
}

/**
 * Get devices by site id.
 * @param req the request
 * @param res the response
 */
function* getDevicesBySiteId(req, res) {
  res.json(yield DeviceService.getDevicesBySiteId(req.params.siteId));
}

/**
 * Update device.
 * @param req the request
 * @param res the response
 */
function* update(req, res) {
  res.json(yield DeviceService.update(req.params.id, req.body));
}

/**
 * Get device.
 * @param req the request
 * @param res the response
 */
function* get(req, res) {
  res.json(yield DeviceService.get(req.params.id));
}

/**
 * Get all device ingress paths.
 * @param req the request
 * @param res the response
 */
function* getAllDeviceIngressPaths(req, res) {
  res.json(yield DeviceService.getAllDeviceIngressPaths());
}

// Exports
module.exports = {
  getDevicesBySiteId,
  create,
  update,
  get,
  getAllDeviceIngressPaths,
};
