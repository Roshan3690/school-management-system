-- 0003_add_names_to_teachers_students.sql

-- ====================================================================================
-- TABLE: teachers
-- ====================================================================================
ALTER TABLE teachers ADD COLUMN first_name TEXT;
ALTER TABLE teachers ADD COLUMN last_name TEXT;

-- ====================================================================================
-- TABLE: students
-- ====================================================================================
ALTER TABLE students ADD COLUMN first_name TEXT;
ALTER TABLE students ADD COLUMN last_name TEXT;
