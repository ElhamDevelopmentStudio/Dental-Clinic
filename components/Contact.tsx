"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="mb-2">
                <strong>Address:</strong> 123 Smile Street, Dental City, DC
                45678
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="mb-2">
                <strong>Email:</strong> info@kabirdentalclinic.com
              </p>
              <p className="mb-4">
                <strong>Office Hours:</strong>
                <br />
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 2:00 PM
                <br />
                Sunday: Closed
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Book an Appointment
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Call Us
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
              <form>
                <div className="mb-4">
                  <Input placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div className="mb-4">
                  <Input placeholder="Subject" />
                </div>
                <div className="mb-4">
                  <Textarea placeholder="Your Message" rows={4} />
                </div>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
