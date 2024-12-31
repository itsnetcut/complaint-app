# Complaint App

This is a complaint app built using React and Supabase.

## Features

- User authentication using Supabase
- Complaint submission form
- Complaint list display
- Admin panel for managing complaints

## Installation

1. Clone the repository using `git clone`
2. Install the dependencies using `npm install`
3. Start the development server using `npm run dev`

## Environment Variables

- `VITE_SUPABASE_ANON_KEY`: The anonymous key for the Supabase instance
- `VITE_SUPABASE_URL`: The URL of the Supabase instance

## Supabase Setup

1. Create a new Supabase instance
2. Create a new table for complaints
3. Add the necessary columns to the complaints table
4. Update the `VITE_SUPABASE_ANON_KEY` and `VITE_SUPABASE_URL` environment variables in the `.env` file

## Usage

1. Start the development server using `npm run dev`
2. Open the app in a web browser
3. Register or log in to submit a complaint
4. View the complaint list
5. Admins can manage complaints in the admin panel
