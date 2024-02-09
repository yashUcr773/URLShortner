// imports
const zod = require("zod");

// define schemas
const URL = zod.object({
    shortenedURL: zod.string().trim().min(3).max(16),
    completeURL: zod.string().trim().url().min(1),
});
module.exports = {
    URL,
};
