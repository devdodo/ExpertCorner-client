import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qqdqdmxsdcbiqbuxyrih.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxZHFkbXhzZGNiaXFidXh5cmloIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5MzY2NzMsImV4cCI6MjAxMzUxMjY3M30.HeQKlUjEYJSIFGQjcTpJs8tUjui2dikXJemBpk7Au18";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
