-- 0002_teachers_students.sql

-- ====================================================================================
-- TABLE: teachers
-- ====================================================================================
CREATE TABLE teachers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID UNIQUE REFERENCES profiles(id) ON DELETE SET NULL,
    teacher_id TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    contact_number TEXT,
    qualification TEXT,
    joining_date DATE,
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'on_leave')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;

CREATE TRIGGER update_teachers_updated_at
    BEFORE UPDATE ON teachers
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ====================================================================================
-- TABLE: students
-- ====================================================================================
CREATE TABLE students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID UNIQUE REFERENCES profiles(id) ON DELETE SET NULL,
    student_id TEXT NOT NULL UNIQUE,
    section_id UUID NOT NULL REFERENCES sections(id) ON DELETE RESTRICT,
    date_of_birth DATE,
    gender TEXT,
    contact_number TEXT,
    parent_name TEXT,
    parent_contact TEXT,
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'graduated', 'transferred')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_students_section_id ON students(section_id);

ALTER TABLE students ENABLE ROW LEVEL SECURITY;

CREATE TRIGGER update_students_updated_at
    BEFORE UPDATE ON students
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ====================================================================================
-- TABLE: teacher_subjects
-- ====================================================================================
CREATE TABLE teacher_subjects (
    teacher_id UUID NOT NULL REFERENCES teachers(id) ON DELETE CASCADE,
    subject_id UUID NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    PRIMARY KEY (teacher_id, subject_id)
);

CREATE INDEX idx_teacher_subjects_subject_id ON teacher_subjects(subject_id);

ALTER TABLE teacher_subjects ENABLE ROW LEVEL SECURITY;
