'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Users, Ambulance, Building2, Settings, Phone, MapPin, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Ambulance className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-primary">OneCall</h1>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-foreground hover:bg-secondary hover:text-secondary-foreground">Contact</Button>
            <Button variant="ghost" className="text-foreground hover:bg-secondary hover:text-secondary-foreground">About</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-5xl font-bold text-foreground text-balance">
            One Unified Ambulance Platform
          </h2>
          <p className="text-xl text-muted-foreground">
            Faster Response, Better Care.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book, track, and coordinate emergency medical care in seconds with our comprehensive platform that connects patients, drivers, and hospitals.
          </p>
          <div className="flex justify-center gap-4 pt-6">
            <Link href="/patient">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Phone className="w-5 h-5" />
                Book Ambulance
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground gap-2">
              <Users className="w-5 h-5" />
              Join as Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Role Cards Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-16 text-foreground">Choose Your Role</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Patient Card */}
            <Link href="/patient" className="group">
              <Card className="p-8 h-full border-2 border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground">Patient / User</h4>
                  <p className="text-muted-foreground">
                    Book an ambulance instantly, track in real-time, and share patient information with hospitals.
                  </p>
                  <ul className="space-y-2 pt-4">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-secondary" /> Quick booking in seconds
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-secondary" /> Real-time tracking
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 text-secondary" /> Emergency SOS
                    </li>
                  </ul>
                </div>
              </Card>
            </Link>

            {/* Ambulance Driver Card */}
            <Link href="/driver" className="group">
              <Card className="p-8 h-full border-2 border-border hover:border-secondary hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Ambulance className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground">Ambulance Owner / Driver</h4>
                  <p className="text-muted-foreground">
                    Manage your ambulance, accept rides, track earnings, and build your reputation.
                  </p>
                  <ul className="space-y-2 pt-4">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-primary" /> Online/Offline toggle
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" /> Route optimization
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 text-primary" /> Earnings dashboard
                    </li>
                  </ul>
                </div>
              </Card>
            </Link>

            {/* Hospital Card */}
            <Link href="/hospital" className="group">
              <Card className="p-8 h-full border-2 border-border hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Building2 className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground">Hospital Dashboard</h4>
                  <p className="text-muted-foreground">
                    Receive ambulance alerts, prepare emergency rooms, and manage incoming cases.
                  </p>
                  <ul className="space-y-2 pt-4">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-accent-foreground" /> Incoming alerts
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent-foreground" /> ETA tracking
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 text-accent-foreground" /> Case management
                    </li>
                  </ul>
                </div>
              </Card>
            </Link>

            {/* Admin Card */}
            <Link href="/admin" className="group">
              <Card className="p-8 h-full border-2 border-border hover:border-destructive hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-destructive/10 rounded-lg flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                    <Settings className="w-8 h-8 text-destructive" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground">Admin Panel</h4>
                  <p className="text-muted-foreground">
                    Monitor all system activity, manage users, and view analytics in real-time.
                  </p>
                  <ul className="space-y-2 pt-4">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-destructive" /> System analytics
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-destructive" /> Live activity map
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 text-destructive" /> User management
                    </li>
                  </ul>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 OneCall Ambulance. All rights reserved. Emergency Response System.</p>
        </div>
      </footer>
    </div>
  )
}
