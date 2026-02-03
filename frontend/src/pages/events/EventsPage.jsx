import React, { useState } from "react";
import { Calendar } from "../../components/events/Calendar";
import { FiMapPin, FiCalendar as FiCalendarIcon } from "react-icons/fi";

const DUCK_IMAGE = "/ducks.jpeg";

export default function EventsPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [formErrors, setFormErrors] = useState({});
  const [formTouched, setFormTouched] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState(undefined);
  const [selectedDate2, setSelectedDate2] = useState(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAttending, setIsAttending] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const allCategories = ["Webinar", "Tech Talks", "Alumni Reunion", "Career Fairs"];

  function validateFormField(field, value) {
    switch (field) {
      case "name":
        if (!value.trim()) return "Name is required.";
        return "";
      case "phone":
        if (!value.trim()) return "Phone is required.";
        if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(value))
          return "Enter a valid phone number.";
        return "";
      case "email":
        if (!value.trim()) return "Email is required.";
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value))
          return "Enter a valid email address.";
        return "";
      default:
        return "";
    }
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setFormTouched((prev) => ({ ...prev, [name]: true }));
    setFormErrors((prev) => ({ ...prev, [name]: validateFormField(name, value) }));
    setFormSuccess(false);
  }

  function handleFormBlur(e) {
    const { name, value } = e.target;
    setFormTouched((prev) => ({ ...prev, [name]: true }));
    setFormErrors((prev) => ({ ...prev, [name]: validateFormField(name, value) }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const errors = {
      name: validateFormField("name", form.name),
      phone: validateFormField("phone", form.phone),
      email: validateFormField("email", form.email),
    };
    setFormErrors(errors);
    setFormTouched({ name: true, phone: true, email: true });
    if (!errors.name && !errors.phone && !errors.email) {
      setFormSuccess(true);
      setForm({ name: "", phone: "", email: "" });
      setTimeout(() => setFormSuccess(false), 2000);
    }
  }

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const events = [
    {
      id: 1,
      title: "Event Title",
      category: "Tech Talks",
      description:
        "Brief description of the event goes here. This is where you can add a short summary of what the event is about.",
      location: "Location, City",
      date: "Jan 29, 2026",
      time: "2:00 PM",
      image: DUCK_IMAGE,
    },
    {
      id: 2,
      title: "Another Event",
      category: "Webinar",
      description:
        "Another event description with relevant details about what attendees can expect.",
      location: "Online",
      date: "Feb 1, 2026",
      time: "6:00 PM",
      image: DUCK_IMAGE,
    },
    {
      id: 3,
      title: "Class of 2020 Reunion",
      category: "Alumni Reunion",
      description:
        "Join us for an exciting reunion with your classmates to celebrate achievements and reconnect.",
      location: "Grand Ballroom",
      date: "Feb 15, 2026",
      time: "7:00 PM",
      image: DUCK_IMAGE,
    },
  ];

  const filteredEvents = events
    .filter((event) => {
      const matchesText =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(event.category);
      return matchesText && matchesCategory;
    })
    .sort((a, b) => {
      const aSelected = selectedCategories.includes(a.category);
      const bSelected = selectedCategories.includes(b.category);
      if (aSelected && !bSelected) return -1;
      if (!aSelected && bSelected) return 1;
      if (aSelected && bSelected) {
        return (
          selectedCategories.indexOf(a.category) -
          selectedCategories.indexOf(b.category)
        );
      }
      return 0;
    });

  return (
    <div
      className="relative bg-gray-100 overflow-hidden"
      style={{
        backgroundColor: "#EFEFEF",
        fontFamily: "'Source Sans Pro', sans-serif",
      }}
    >
      {/* Main Events Page */}
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3">
          Events and{" "}
          <span style={{ color: "#f3b927" }}>Community Engagement</span>
        </h1>
        <p className="text-gray-600 mb-6 lg:mb-8 max-w-4xl italic text-sm sm:text-base">
          Discover upcoming events, connect with fellow alumni, and stay
          engaged with our vibrant community through our curated selection of
          virtual and onsite gatherings.
        </p>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 gap-y-8 max-w-7xl mx-auto">
          {/* Left Column */}
          <aside className="w-full lg:w-auto lg:min-w-[300px] shrink-0">
            <div id="events-section" className="mb-10">
              {/* Stepper */}
              <div className="mb-10">
                <div className="flex items-start justify-between px-2">
                  <a
                    href="#events-section"
                    className="flex flex-col items-center flex-1 cursor-pointer hover:opacity-80 transition-opacity group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#f3b927] flex items-center justify-center text-white text-xs font-bold mb-2 transition-colors group-hover:bg-black">
                      1
                    </div>
                    <span className="text-xs font-medium text-center text-[#f3b927] transition-colors group-hover:text-black">
                      Events
                    </span>
                  </a>
                  <div className="flex-1 h-0.5 bg-[#f3b927] mx-1 mt-4" />
                  <a
                    href="#registration"
                    className="flex flex-col items-center flex-1 cursor-pointer hover:opacity-80 transition-opacity group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#f3b927] flex items-center justify-center text-white text-xs font-bold mb-2 transition-colors group-hover:bg-black">
                      2
                    </div>
                    <span className="text-xs font-medium text-center text-[#f3b927] transition-colors group-hover:text-black">
                      Registration
                    </span>
                  </a>
                  <div className="flex-1 h-0.5 bg-[#f3b927] mx-1 mt-4" />
                  <a
                    href="#virtual-onsite-section"
                    className="flex flex-col items-center flex-1 cursor-pointer hover:opacity-80 transition-opacity group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#f3b927] flex items-center justify-center text-white text-xs font-bold mb-2 transition-colors group-hover:bg-black">
                      3
                    </div>
                    <span className="text-xs font-medium text-center text-[#f3b927] transition-colors group-hover:text-black">
                      Virtual &amp;
                      <br />
                      Onsite
                    </span>
                  </a>
                  <div className="flex-1 h-0.5 bg-[#f3b927] mx-1 mt-4" />
                  <a
                    href="#feedback-section"
                    className="flex flex-col items-center flex-1 cursor-pointer hover:opacity-80 transition-opacity group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#f3b927] flex items-center justify-center text-white text-xs font-bold mb-2 transition-colors group-hover:bg-black">
                      4
                    </div>
                    <span className="text-xs font-medium text-center text-[#f3b927] transition-colors group-hover:text-black">
                      Feedback
                    </span>
                  </a>
                </div>
              </div>

              {/* Filter Buttons */}
              <div className="flex gap-2 mb-2 flex-wrap">
                <button
                  onClick={() =>
                    setSelectedFilter(
                      selectedFilter === "Today" ? null : "Today"
                    )
                  }
                  className="px-4 py-2 text-sm font-medium rounded-md transition-colors text-white"
                  style={{
                    backgroundColor:
                      selectedFilter === "Today" ? "#f3b927" : "#000000",
                  }}
                >
                  Today
                </button>
                <button
                  onClick={() =>
                    setSelectedFilter(
                      selectedFilter === "This Week" ? null : "This Week"
                    )
                  }
                  className="px-4 py-2 text-sm font-medium rounded-md transition-colors text-white"
                  style={{
                    backgroundColor:
                      selectedFilter === "This Week" ? "#f3b927" : "#000000",
                  }}
                >
                  This Week
                </button>
              </div>
              <div className="flex gap-2 mb-6 flex-wrap">
                <button
                  onClick={() =>
                    setSelectedFilter(
                      selectedFilter === "Next Week" ? null : "Next Week"
                    )
                  }
                  className="px-4 py-2 text-sm font-medium rounded-md transition-colors text-white"
                  style={{
                    backgroundColor:
                      selectedFilter === "Next Week" ? "#f3b927" : "#000000",
                  }}
                >
                  Next Week
                </button>
              </div>

              {/* Calendar */}
              <div className="mb-1">
                <Calendar date={selectedDate1} onDateChange={setSelectedDate1} />
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-3 text-gray-900">
                Categories
              </h2>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  {[...selectedCategories,
                    ...allCategories.filter(
                      (c) => !selectedCategories.includes(c)
                    ),
                  ]
                    .slice(0, 2)
                    .map((category) => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className="px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-2 text-white"
                        style={{
                          backgroundColor: selectedCategories.includes(
                            category
                          )
                            ? "#f3b927"
                            : "#000000",
                        }}
                      >
                        {selectedCategories.includes(category) && (
                          <span aria-hidden="true">✕</span>
                        )}
                        {category}
                      </button>
                    ))}
                </div>
                <div className="flex gap-2">
                  {[...selectedCategories,
                    ...allCategories.filter(
                      (c) => !selectedCategories.includes(c)
                    ),
                  ]
                    .slice(2, 4)
                    .map((category) => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className="px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-2 text-white"
                        style={{
                          backgroundColor: selectedCategories.includes(
                            category
                          )
                            ? "#f3b927"
                            : "#000000",
                        }}
                      >
                        {selectedCategories.includes(category) && <span>✕</span>}
                        {category}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column */}
          <main className="flex-1 lg:ml-4 gap-y-6 flex flex-col">
            {/* Search Bar */}
            <div className="mb-4 bg-white rounded-md shadow-sm p-2 sm:p-3 lg:p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-100"
                />
                <button className="px-3 py-1.5 text-sm font-medium rounded-md text-white bg-[#f3b927] transition-colors hover:bg-black hover:text-white">
                  Search
                </button>
              </div>
            </div>

            {/* Events List */}
            <div className="space-y-4 mb-8">
              {filteredEvents.length === 0 ? (
                <div className="bg-white rounded-md shadow-sm p-12 text-center">
                  <FiCalendarIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    No Events
                  </h3>
                  <p className="text-gray-400">
                    There are no events matching your criteria.
                  </p>
                </div>
              ) : (
                filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-md shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row gap-0 gap-y-4">
                      <div className="shrink-0 sm:w-48 md:w-56 lg:w-64 min-h-[120px]">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-32 sm:h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 gap-y-2">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-lg font-bold text-gray-900">
                              {event.title}
                            </h3>
                            <div
                              className="text-white px-3 py-1 text-sm font-semibold shrink-0"
                              style={{ backgroundColor: "#f3b927" }}
                            >
                              {event.category}
                            </div>
                          </div>
                          <p className="text-gray-700 mb-4">
                            {event.description}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <FiMapPin className="w-4 h-4 text-[#f3b927]" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiCalendarIcon className="w-4 h-4 text-[#f3b927]" />
                            <span>
                              {event.date} • {event.time}
                            </span>
                          </div>
                        </div>
                        <a
                          href="#registration"
                          className="text-sm font-medium mt-4 hover:underline"
                          style={{ color: "#f3b927" }}
                        >
                          Register
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Pagination (static) */}
            <div className="flex justify-end items-center">
              <div className="inline-flex">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                  className="px-3 py-2 text-sm bg-black text-white hover:opacity-80 transition-opacity rounded-l-md border-r border-gray-700"
                >
                  &lt;
                </button>
                <button className="px-3 py-2 text-sm bg-black text-white hover:opacity-80 transition-opacity border-r border-gray-700">
                  1
                </button>
                <button className="px-3 py-2 text-sm bg-black text-white hover:opacity-80 transition-opacity border-r border-gray-700">
                  2
                </button>
                <button className="px-3 py-2 text-sm bg-black text-white hover:opacity-80 transition-opacity border-r border-gray-700">
                  3
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => prev + 1)
                  }
                  className="px-3 py-2 text-sm bg-black text-white hover:opacity-80 transition-opacity rounded-r-md"
                >
                  &gt;
                </button>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* Registration / Attendance Tracking */}
      <section
        id="registration"
        className="w-full py-12 mt-20 sm:mt-40 lg:mt-80 relative overflow-hidden"
        style={{
          backgroundColor: "#E8C32C",
          clipPath: "polygon(0 0, 100% 3.6%, 100% 98%, 0 100%)",
        }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 lg:mt-10 mb-4 sm:mb-8 lg:mb-12 relative z-10 gap-y-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 xl:gap-32">
            {/* Left */}
            <section className="w-full lg:w-auto">
              <h1 className="text-2xl sm:text-3xl font-bold mb-1 text-black">
                Events Registration/
              </h1>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-black">
                Attendance Tracking
              </h1>
              <div className="mb-4 max-w-full sm:max-w-xs">
                <label className="block text-lg sm:text-xl font-bold mb-2 text-black">
                  Select Date
                </label>
                <Calendar
                  date={selectedDate2}
                  onDateChange={setSelectedDate2}
                />
              </div>
              <div>
                <div className="flex items-center mb-2 gap-2">
                  <label className="block text-lg sm:text-xl font-bold text-black">
                    Select Event
                  </label>
                  <button className="px-3 py-1.5 text-sm text-black hover:underline ml-2">
                    Next →
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white flex-1 rounded-md shadow-sm">
                    <div className="flex gap-3">
                      <div className="flex flex-col gap-2 flex-1">
                        <div>
                          <p className="text-xs text-gray-700">Event Name</p>
                          <p className="text-sm font-bold text-black">
                            Tech Summit 2026
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-700">Location</p>
                          <p className="text-sm text-black">
                            Convention Center
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-700">
                            Date &amp; Time
                          </p>
                          <p className="text-sm text-black">
                            Jan 29, 2026 • 2:00 PM
                          </p>
                        </div>
                      </div>
                      <img
                        src={DUCK_IMAGE}
                        alt="Event"
                        className="w-20 h-20 object-cover shrink-0 rounded"
                      />
                    </div>
                  </div>
                  <input
                    type="radio"
                    id="attending"
                    name="event-selection"
                    checked={isAttending}
                    onChange={() => setIsAttending((prev) => !prev)}
                    className="w-4 h-4 shrink-0 cursor-pointer"
                    style={{
                      accentColor: isAttending ? "#f3b927" : "inherit",
                    }}
                  />
                </div>
              </div>
            </section>

            {/* Right */}
            <section className="flex flex-col justify-center flex-1 w-full max-w-full sm:max-w-lg mx-auto">
              <p className="text-xs sm:text-sm text-gray-700 mb-2">
                Selected Event: Tech Summit 2026
              </p>
              <div className="p-4 sm:p-5 lg:p-6 bg-white rounded-md shadow-sm w-full">
                <h3 className="text-lg mb-4 font-bold text-black">
                  Registration Form
                </h3>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={handleFormSubmit}
                  noValidate
                >
                  <div>
                    <label className="block text-sm mb-1.5 font-medium text-black">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleFormChange}
                      onBlur={handleFormBlur}
                      className={`w-full px-3 py-2 rounded-md bg-gray-100 shadow-sm text-sm text-black placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                        formErrors.name && formTouched.name
                          ? "ring-2 ring-red-400"
                          : ""
                      }`}
                    />
                    {formErrors.name && formTouched.name && (
                      <p className="text-xs text-red-500 mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm mb-1.5 font-medium text-black">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(123) 456-7890"
                      value={form.phone}
                      onChange={handleFormChange}
                      onBlur={handleFormBlur}
                      className={`w-full px-3 py-2 rounded-md bg-gray-100 shadow-sm text-sm text-black placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                        formErrors.phone && formTouched.phone
                          ? "ring-2 ring-red-400"
                          : ""
                      }`}
                    />
                    {formErrors.phone && formTouched.phone && (
                      <p className="text-xs text-red-500 mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm mb-1.5 font-medium text-black">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleFormChange}
                      onBlur={handleFormBlur}
                      className={`w-full px-3 py-2 rounded-md bg-gray-100 shadow-sm text-sm text-black placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                        formErrors.email && formTouched.email
                          ? "ring-2 ring-red-400"
                          : ""
                      }`}
                    />
                    {formErrors.email && formTouched.email && (
                      <p className="text-xs text-red-500 mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2.5 mt-2 text-sm font-bold rounded-md bg-[#f3b927] text-white transition-colors hover:bg-black hover:text-white"
                  >
                    Register
                  </button>
                  {formSuccess && (
                    <p className="text-green-600 text-sm text-center mt-2">
                      Registration successful!
                    </p>
                  )}
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Virtual & Onsite Events */}
      <section
        id="virtual-onsite-section"
        className="max-w-7xl mx-auto mt-16 sm:mt-24 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative"
      >
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <div
            className="rounded-full"
            style={{
              width: "520px",
              height: "520px",
              background:
                "radial-gradient(circle, #EED45E 0%, rgba(238,212,94,0.8) 55%, rgba(238,212,94,0) 80%)",
              boxShadow: "0 0 200px 80px rgba(238,212,94,0.85)",
              opacity: 0.85,
              filter: "blur(2px)",
            }}
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 lg:mb-12 relative z-10 text-slate-900">
          Virtual &amp; Onsite Events
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 lg:mb-12 relative z-10">
          {[
            {
              title: "Event Name",
              description:
                "Brief description of the event and what attendees can expect to experience.",
              location: "Location",
              date: "Jan 30, 2026",
            },
            {
              title: "Virtual Webinar",
              description:
                "Join us online for an engaging discussion about industry trends and insights.",
              location: "Online",
              date: "Feb 5, 2026",
            },
            {
              title: "Workshop Session",
              description:
                "Hands-on learning experience with expert instructors in a collaborative environment.",
              location: "Conference Hall",
              date: "Feb 10, 2026",
            },
            {
              title: "Networking Mixer",
              description:
                "Connect with professionals and expand your network in a casual, friendly setting.",
              location: "Rooftop Lounge",
              date: "Feb 15, 2026",
            },
            {
              title: "Training Program",
              description:
                "Comprehensive training program designed to enhance your professional skills and knowledge.",
              location: "Training Center",
              date: "Feb 20, 2026",
            },
            {
              title: "Product Launch",
              description:
                "Be the first to see our latest innovation and learn about exciting new features.",
              location: "Grand Ballroom",
              date: "Feb 25, 2026",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="overflow-hidden bg-white shadow-sm rounded-md hover:shadow-lg transition-shadow group"
            >
              <img
                src={DUCK_IMAGE}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 sm:p-6 flex flex-col gap-y-2">
                <h3 className="text-lg font-bold mb-3 text-black transition-colors group-hover:text-[#f3b927]">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FiMapPin className="w-4 h-4 text-[#f3b927]" />{" "}
                    {card.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiCalendarIcon className="w-4 h-4 text-[#f3b927]" />{" "}
                    {card.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 relative z-10">
          <button className="text-gray-600 hover:text-black">←</button>
          <span className="text-gray-600">1 of 3</span>
          <button className="text-gray-600 hover:text-black">→</button>
        </div>
      </section>

      {/* Feedback Section */}
      <section
        id="feedback-section"
        className="w-full py-12 lg:py-16 mt-16 sm:mt-24 relative overflow-hidden"
        style={{ backgroundColor: "#E8C32C" }}
      >
        <div className="mx-auto px-4 sm:px-6 flex justify-center relative z-10">
          <div className="w-full max-w-sm">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
              Event Feedback Forms
            </h1>
            <div className="mb-6">
              <select className="w-full px-5 py-4 bg-white text-gray-700 text-lg font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option>Select an Event</option>
                <option>Event Name - Jan 30, 2026</option>
                <option>Virtual Webinar - Feb 5, 2026</option>
                <option>Workshop Session - Feb 10, 2026</option>
                <option>Networking Mixer - Feb 15, 2026</option>
                <option>Training Program - Feb 20, 2026</option>
              </select>
            </div>
            <div className="bg-white p-5 mb-4 rounded-md shadow-sm">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-black">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 text-sm rounded-md bg-gray-100 text-black placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-black">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 text-sm rounded-md bg-gray-100 text-black placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-black">
                  Rating
                </label>
                <select className="w-full px-3 py-2 text-sm rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option value="">Select a Rating</option>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Average</option>
                  <option>Poor</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-black">
                  Feedback
                </label>
                <textarea
                  placeholder="Please share your feedback..."
                  rows={4}
                  className="w-full px-3 py-2 text-sm rounded-md bg-gray-100 text-black placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                />
              </div>
            </div>
            <button className="w-full px-4 py-2.5 text-sm text-white font-semibold rounded-md bg-black transition-colors hover:bg-[#f3b927]">
              Submit Feedback
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

