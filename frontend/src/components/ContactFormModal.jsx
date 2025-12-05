import { FaTimes, FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactForm } from '../hooks/useContactForm';

const ContactFormModal = ({ isOpen, onClose }) => {
  const { formData, isLoading, status, handleChange, handleSubmit } = useContactForm();

  const handleFormSubmit = async (e) => {
    await handleSubmit(e);
    // Close modal after successful submission with a delay
    if (status?.type === 'success') {
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Modal */}
          <motion.div 
            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ 
              duration: 0.4, 
              type: "spring", 
              damping: 25, 
              stiffness: 300 
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <motion.h2 
                className="text-2xl font-bold text-gray-900"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                Get In Touch
              </motion.h2>
              <motion.button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <FaTimes className="text-gray-500" />
              </motion.button>
            </div>

            {/* Form */}
            <motion.div 
              className="p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <motion.p 
                className="text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                Have a project in mind or want to discuss opportunities? I'd love to hear from you!
              </motion.p>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* Status Message */}
            {status?.message && (
              <motion.div 
                className={`p-4 rounded-2xl flex items-center gap-3 ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3, type: "spring", damping: 20 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", damping: 15 }}
                >
                  {status.type === 'success' ? (
                    <FaCheckCircle className="text-green-600" />
                  ) : (
                    <FaExclamationCircle className="text-red-600" />
                  )}
                </motion.div>
                <span className="text-sm font-medium">{status.message}</span>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Your full name"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="your.email@example.com"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-colors resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Tell me about your project, ideas, or how I can help you..."
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full bg-red-700 text-white py-4 rounded-2xl hover:bg-red-800 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <FaSpinner />
                  </motion.div>
                  Sending Message...
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>

            <motion.p 
              className="text-xs text-gray-500 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              Your information is secure and will only be used to respond to your inquiry.
            </motion.p>
          </form>
        </motion.div>
      </motion.div>
    </div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;
